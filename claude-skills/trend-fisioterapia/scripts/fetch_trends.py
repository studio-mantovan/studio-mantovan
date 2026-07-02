"""
Recupera dati di Google Trends (Italia) per una lista di argomenti seme.

Uso:
    python fetch_trends.py

Richiede:
    pip install pytrends

Output:
    Stampa a schermo, per ogni argomento: andamento ultimi 3 mesi
    (in crescita / stabile / in calo) e query correlate in crescita.
"""

import time
import sys
from pytrends.request import TrendReq

SEEDS_FILE = "seeds.txt"
GEO = "IT"
TIMEFRAME = "today 3-m"
PAUSE_SECONDS = 8  # pausa tra una richiesta e l'altra per evitare rate limit


def load_seeds(path=SEEDS_FILE):
    with open(path, encoding="utf-8") as f:
        return [line.strip() for line in f if line.strip()]


def analyze_trend(timeline_df):
    """Confronta la media della prima metà del periodo con la seconda
    metà per stimare se l'interesse è in crescita, stabile o in calo."""
    if timeline_df is None or timeline_df.empty:
        return "dati insufficienti"

    col = timeline_df.columns[0]
    series = timeline_df[col]
    mid = len(series) // 2
    first_half_avg = series[:mid].mean()
    second_half_avg = series[mid:].mean()

    if first_half_avg == 0:
        return "dati insufficienti"

    variation = (second_half_avg - first_half_avg) / first_half_avg * 100

    if variation > 15:
        return f"in crescita (+{variation:.0f}%)"
    elif variation < -15:
        return f"in calo ({variation:.0f}%)"
    else:
        return "stabile"


def main():
    seeds = load_seeds()
    pytrends = TrendReq(hl="it-IT", tz=60)

    results = []

    for i, seed in enumerate(seeds):
        print(f"\n=== {seed} ===")
        try:
            pytrends.build_payload([seed], cat=0, timeframe=TIMEFRAME, geo=GEO)

            # Andamento temporale
            timeline = pytrends.interest_over_time()
            trend_status = analyze_trend(timeline)
            print(f"Andamento: {trend_status}")

            # Query correlate in crescita
            related = pytrends.related_queries()
            rising = related.get(seed, {}).get("rising")
            if rising is not None and not rising.empty:
                top_rising = rising.head(5)["query"].tolist()
                print(f"Query correlate in crescita: {top_rising}")
            else:
                top_rising = []
                print("Nessuna query correlata in crescita rilevata")

            results.append({
                "seed": seed,
                "trend_status": trend_status,
                "rising_queries": top_rising,
            })

        except Exception as e:
            print(f"Errore su '{seed}': {e}", file=sys.stderr)
            results.append({
                "seed": seed,
                "trend_status": "errore",
                "rising_queries": [],
            })

        # Pausa per evitare rate limiting di Google, tranne dopo l'ultimo
        if i < len(seeds) - 1:
            time.sleep(PAUSE_SECONDS)

    print("\n\n=== RIEPILOGO ===")
    for r in results:
        print(f"- {r['seed']}: {r['trend_status']} | correlate: {r['rising_queries']}")

    return results


if __name__ == "__main__":
    main()

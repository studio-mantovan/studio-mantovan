"""
Recupera gli autocomplete reali di Google Suggest per una lista di
argomenti seme, in italiano.

Uso:
    python fetch_suggest.py

Richiede:
    pip install requests

Output:
    Stampa a schermo, per ogni argomento, le query suggerite da Google.
"""

import time
import requests

SEEDS_FILE = "seeds.txt"
ENDPOINT = "https://suggestqueries.google.com/complete/search"
PAUSE_SECONDS = 2


def load_seeds(path=SEEDS_FILE):
    with open(path, encoding="utf-8") as f:
        return [line.strip() for line in f if line.strip()]


def fetch_suggestions(query, lang="it", country="it"):
    params = {
        "client": "firefox",
        "q": query,
        "hl": lang,
        "gl": country,
    }
    resp = requests.get(ENDPOINT, params=params, timeout=10)
    resp.raise_for_status()
    data = resp.json()
    # Il formato di risposta è [query_originale, [suggerimento1, suggerimento2, ...]]
    return data[1] if len(data) > 1 else []


def main():
    seeds = load_seeds()
    all_results = {}

    for i, seed in enumerate(seeds):
        print(f"\n=== {seed} ===")
        try:
            suggestions = fetch_suggestions(seed)
            for s in suggestions:
                print(f"- {s}")
            all_results[seed] = suggestions
        except Exception as e:
            print(f"Errore su '{seed}': {e}")
            all_results[seed] = []

        if i < len(seeds) - 1:
            time.sleep(PAUSE_SECONDS)

    return all_results


if __name__ == "__main__":
    main()

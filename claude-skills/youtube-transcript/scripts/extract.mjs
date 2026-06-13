import { YoutubeTranscript } from 'youtube-transcript';

const url = process.argv[2];

try {
  const transcript = await YoutubeTranscript.fetchTranscript(url, { lang: 'it' })
    .catch(() => YoutubeTranscript.fetchTranscript(url, { lang: 'en' }))
    .catch(() => YoutubeTranscript.fetchTranscript(url));

  const text = transcript.map(item => item.text).join(' ');
  console.log(text);
} catch (err) {
  process.stderr.write('ERRORE: ' + err.message + '\n');
  process.exit(1);
}

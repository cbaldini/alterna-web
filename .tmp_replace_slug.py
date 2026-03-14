from pathlib import Path

root = Path('/Users/cristianbaldini/alterna-web')
replacements = {
    root / 'package.json': [
        ('"name": "alterna-medios"', '"name": "alternamedia"'),
        ('https://github.com/alterna/alterna-medios', 'https://github.com/alterna/alternamedia'),
    ],
    root / 'README.md': [
        ('https://github.com/tunombre/alterna-medios.git', 'https://github.com/tunombre/alternamedia.git'),
        ('s3://alterna-medios', 's3://alternamedia'),
        ('--bucket alterna-medios', '--bucket alternamedia'),
    ],
    root / 'TECHNICAL_SUMMARY.sh': [
        ('alterna-medios/', 'alternamedia/'),
        ('S3 bucket: alterna-medios', 'S3 bucket: alternamedia'),
    ],
}

for path, reps in replacements.items():
    text = path.read_text(encoding='utf-8')
    for old, new in reps:
        text = text.replace(old, new)
    path.write_text(text, encoding='utf-8')
    print(f'updated {path.name}')


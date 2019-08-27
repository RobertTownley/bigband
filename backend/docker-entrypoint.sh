#!/bin/bash
python manage.py migrate
python manage.py collectstatic --noinput

# Prepare log files and output logs to stdout
mkdir -p /srv/logs/
touch /srv/logs/gunicorn.log
touch /srv/logs/access.log

if [ ${DEBUG} == "true" ]; then
  echo "Running Django runserver in debug mode"
  python manage.py runserver 0.0.0.0:8001
else
  # Start Gunicorn
  echo Starting Gunicorn
  exec /usr/local/bin/gunicorn backend.wsgi:application \
      --name backend \
      --bind 0.0.0.0:8001 \
      --workers 3 \
      --log-level=info \
        --log-file=/srv/logs/gunicorn.log \
        --access-logfile=/srv/logs/access.log
fi

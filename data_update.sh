#! /bin/sh

FILE=titres_titles`date  --date='3 days ago' +"%y-%m-%d"`.zip

cd /tmp/
FTPFILE=ftp://ftp.mrn.gouv.qc.ca/public/gestim/telechargements/Province_shape/`echo $FILE`
wget $FTPFILE


if [ -f "$FILE" ]
then
  mkdir titles
  cd titles
  unzip /tmp/$FILE
  for f in *.shp   
  do
    shptree $f
  done

  cd /opt/scribeui/application/workspaces/portail/demo/data/
  rm -r titles titles.*
  mv /tmp/titles ./
  ogrtindex -write_absolute_path titles.shp titles/*.shp
  shptree titles.shp
  chown  www-data.users titles titles.*
fi

#! /bin/sh

cd /opt/scribeui/application/workspaces/portail/demo/data/
FILE=ftp://ftp.mrn.gouv.qc.ca/public/gestim/telechargements/Province_shape/titres_titles`date  --date='3 days ago' +"%y-%m-%d"`.zip
wget $FILE
rm -r titles titles.shp

mkdir titles
cd titles
unzip ../titres_titles`date  --date='3 days ago' +"%y-%m-%d"`.zip
cd ..
ogrtindex -write_absolute_path titles.shp titles/*.shp

#! /bin/sh

cd /opt/scribeui/application/workspaces/portail/demo/data/
rm -r titles titles.shp
mkdir titles
wget ftp://ftp.mrn.gouv.qc.ca/public/gestim/telechargements/Province_shape/titres_titles13-09-28.zip

mkdir titles
cd titles
unzip ../titres_titles13-09-28.zip
cd ..
ogrtindex -write_absolute_path titles.shp titles/*.shp
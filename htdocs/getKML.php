<?php

  /**
   * @author Alexandre Dubé
   * @description If called with fileContent as POST, writes a KML file in /tmp
   *     folder. If as GET, return the file content.
   */

$fileName = 'export.kml';
$filePath = '/tmp/'.$fileName;

if ($_POST) {
    if ($_POST["fileContent"]) {
        $fileContent = $_POST["fileContent"];
        if (file_put_contents($filePath, $fileContent) === false) {
            echo '{"success": false, "error": "error while writing content"}';
        } else {
            echo '{"success": true}';
        }
    } else {
        echo '{"success": false, "error": "fileContent parameter missing"}';
    }
} else {
    header('Content-Description: File Transfer');
    header('Content-Type: application/vnd.google-earth.kml+xml');
    header('Content-Disposition: attachment; filename='.$fileName);
    header('Content-Transfer-Encoding: binary');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($filePath));
    ob_clean();
    flush();
    readfile($filePath);
}

exit;

?>


<?php

  /**
   * @author Alexandre Dubé
   * @description If called with fileContent as POST, writes a KML file in /tmp
   *     folder. If as GET, return the file content.
   */

if ($_POST) {
    if ($_POST["fileContent"]) {
        $id = uniqid();
        $fileName = 'export-'.$id.'.kml';
        $filePath = '/tmp/'.$fileName;

        $fileContent = $_POST["fileContent"];
        if (file_put_contents($filePath, $fileContent) === false) {
            echo '{"success": false, "error": "error while writing content"}';
        } else {
            echo '{"success": true, id: "'.$id.'"}';
        }
    } else {
        echo '{"success": false, "error": "fileContent parameter missing"}';
    }
} else if ($_GET && $_GET['id']) {
    $id = $_GET['id'];
    $fileName = 'export-'.$id.'.kml';
    $filePath = '/tmp/'.$fileName;

    header('Content-Description: File Transfer');
    header('Content-Type: application/vnd.google-earth.kml+xml');
    header('Content-Disposition: attachment; filename=export.kml');
    header('Content-Transfer-Encoding: binary');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($filePath));
    ob_clean();
    flush();
    readfile($filePath);
} else {
    echo '{"success": false, "error": "id parameter is missing"}';
}

exit;

?>


<?php

    function uploadImage($image) {
        if(!$image){
            return NULL;
        }

        $target_dir = "../../img/product_img/";
        $target_file = $target_dir . basename($image["name"]);
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

        // Check if image file is a actual image or fake image
        $check = getimagesize($image["tmp_name"]);
        if($check !== false) {
        } else {
            throw new Exception("File is not an image.");
        }

        // Check if file already exists
        if (file_exists($target_file)) {
            throw new Exception("Sorry, file already exists.");
        }

        // Check file size
        if ($image["size"] > 5000000) {
            throw new Exception("Sorry, your file is too large.");
        }

        // Allow certain file formats
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
            throw new Exception("Sorry, only JPG, JPEG, PNG & GIF files are allowed.");
        }
        
        // if everything is ok, try to upload file
        if (move_uploaded_file($image["tmp_name"], $target_file)) {
            return basename($image["name"]);
        } else {
            throw new Exception("Sorry, there was an error uploading your file.");
        }
    }


?>
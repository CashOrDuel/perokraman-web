<?php

namespace Controller;

include "Traits/ResponseFormatter.php";
include "Controllers/Controller.php";

use Traits\ResponseFormatter;

class ProductController extends Controller{
    use ResponseFormatter;

    public function __construt(){
        $this->controllerName = "Get All Product";
        $this->controllerMethod = " GET";
    }

    public function getAllProduct(){
        $dummyData = [
            "Air Mineral",
            "Kebab",
            "spaghetti",
            "jus jambu"
        ];
        $response = [
            "controller_atribute" => $this->getControllerAttribute(),
            "Product" => $dummyData
        ];
        return $this->responseFormatter(200, "Sucess", $response);
    }
}
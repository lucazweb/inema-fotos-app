<?php 
    # Conexão ao banco de dados
    
	class Connect {

		protected static $db;

		private function __construct(){
			// Vars
			try{
				self::$db = new PDO('mysql:host=localhost;dbname=varal_das_aguas', 'root', '');
				self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				self::$db->exec('SET NAMES utf8');

			}catch(PDOException $e){
				die("ERRO" . $e->getMessage());
			}

		}

		public static function Con(){
			if(!self::$db){
				new Connect();
			}

			return self::$db;
        }
        
        public static function Store($array, $table){

            $query = "INSERT INTO `$table` (COLS) VALUES (%VAL%);";
            $columns = '';
            $values = '';

            foreach($array as $column => $value){
                $columns .= "".$column.",";
                $values  .= "'".$value."',";
            }

            $columns = trim($columns,',');
            $values  = trim($values,',');
            $query = str_replace('COLS',$columns,$query);
            $query = str_replace('%VAL%',$values,$query);
    
            return $query;            
        }

	}

 ?>
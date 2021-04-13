--DDL
CREATE TABLE `teste`.`paises` (`id` INT NOT NULL AUTO_INCREMENT,  `nome` VARCHAR(50) NOT NULL,  PRIMARY KEY (`id`));
CREATE TABLE `teste`.`estados` (  `id` INT NOT NULL,  `nome` VARCHAR(50) NOT NULL,  `idPais` INT NOT NULL,  PRIMARY KEY (`id`),  CONSTRAINT `fk_estado_pais`    FOREIGN KEY (`idPais`)    REFERENCES `teste`.`paises` (`id`)    ON DELETE NO ACTION    ON UPDATE NO ACTION);
CREATE TABLE `teste`.`cidades` (  `id` INT NOT NULL AUTO_INCREMENT,  `nome` VARCHAR(50) NOT NULL,  `populacao` INT NULL,  `idEstado` INT NOT NULL,  PRIMARY KEY (`id`),  INDEX `idx_cidade_nome` (`nome` ASC),  INDEX `fk_cidade_estado_idx` (`idEstado` ASC),  CONSTRAINT `fk_cidade_estado`    FOREIGN KEY (`idEstado`)    REFERENCES `teste`.`estados` (`id`)    ON DELETE NO ACTION    ON UPDATE NO ACTION);
CREATE TABLE `teste`.`casos` (  `id` INT NOT NULL AUTO_INCREMENT,  `casos` INT NOT NULL,  `recuperados` INT NOT NULL,  `mortos` INT NOT NULL,  `data` DATE NOT NULL,  `bandeiraAtual` VARCHAR(45) NULL,  `idCidade` INT NOT NULL,  PRIMARY KEY (`id`),  INDEX `idx_casos_data` (`data` ASC),  INDEX `fk_casos_cidade_idx` (`idCidade` ASC),  CONSTRAINT `fk_casos_cidade`    FOREIGN KEY (`idCidade`)    REFERENCES `teste`.`cidades` (`id`)    ON DELETE NO ACTION    ON UPDATE NO ACTION);

--INSERTS


CREATE SCHEMA IF NOT EXISTS `noose` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `noose` ;

CREATE TABLE IF NOT EXISTS `noose`.`user` (
  `iduser` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`iduser`));

CREATE TABLE IF NOT EXISTS `noose`.`numbers` (
  `idnumbers` INT(11) NOT NULL AUTO_INCREMENT,
  `level` INT(11) NULL DEFAULT NULL,
  `creacio` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `user_iduser` INT(11) NOT NULL,
  PRIMARY KEY (`idnumbers`),
  INDEX `fk_numbers_user` (`user_iduser` ASC),
  CONSTRAINT `fk_numbers_user`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `noose`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `noose`.`reaccio` (
  `idreaccio` INT(11) NOT NULL AUTO_INCREMENT,
  `temps` INT(11) NULL DEFAULT NULL,
  `creacio` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `user_iduser` INT(11) NOT NULL,
  PRIMARY KEY (`idreaccio`),
  INDEX `fk_reaccio_user1` (`user_iduser` ASC),
  CONSTRAINT `fk_reaccio_user1`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `noose`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
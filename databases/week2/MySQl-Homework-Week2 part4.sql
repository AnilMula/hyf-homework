-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema farm
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema farm
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `farm` DEFAULT CHARACTER SET utf8 ;
USE `farm` ;

-- -----------------------------------------------------
-- Table `farm`.`farmers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`farmer` (
  `id` INT(10) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `mobile` INT(10) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `farm`.`animal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`animal` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NULL,
  `total_children` INT(2) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `animal_id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `animal_name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `farm`.`barn`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`barn` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `age` INT(2) NOT NULL,
  `parent_name` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `farm`.`farm-animals`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`farm-animals` (
  `id` INT NOT NULL,
  `farmer_id` INT(10) NOT NULL,
  `animal_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_farm-animals_farmer_idx` (`farmer_id` ASC) VISIBLE,
  INDEX `fk_farm-animals_animal1_idx` (`animal_id` ASC) VISIBLE,
  CONSTRAINT `fk_farm-animals_farmer`
    FOREIGN KEY (`farmer_id`)
    REFERENCES `farm`.`farmer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_farm-animals_animal1`
    FOREIGN KEY (`animal_id`)
    REFERENCES `farm`.`animal` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `farm`.`anilmal-barns`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `farm`.`anilmal-barns` (
  `id` INT NOT NULL,
  `animal_id` INT NOT NULL,
  `barn_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_anilmal-barns_animal1_idx` (`animal_id` ASC) VISIBLE,
  INDEX `fk_anilmal-barns_barn1_idx` (`barn_id` ASC) VISIBLE,
  CONSTRAINT `fk_anilmal-barns_animal1`
    FOREIGN KEY (`animal_id`)
    REFERENCES `farm`.`animal` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_anilmal-barns_barn1`
    FOREIGN KEY (`barn_id`)
    REFERENCES `farm`.`barn` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

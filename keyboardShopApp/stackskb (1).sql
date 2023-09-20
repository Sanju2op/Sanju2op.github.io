-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2023 at 06:09 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stackskb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` text NOT NULL,
  `admin_pass` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kb_brand`
--

CREATE TABLE `kb_brand` (
  `brand_id` int(11) NOT NULL,
  `brand_name` text NOT NULL,
  `brand_email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kb_brand`
--

INSERT INTO `kb_brand` (`brand_id`, `brand_name`, `brand_email`) VALUES
(4, 'Multix', 'sales@multix.com'),
(5, 'AEOM Gaming', 'sales@aeom.com');

-- --------------------------------------------------------

--
-- Table structure for table `kb_categories`
--

CREATE TABLE `kb_categories` (
  `cat_id` int(11) NOT NULL,
  `cat_name` text NOT NULL,
  `cat_img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kb_categories`
--

INSERT INTO `kb_categories` (`cat_id`, `cat_name`, `cat_img`) VALUES
(1, 'Diy Keyboard Kits', 'cat_diy_kb.jpg'),
(2, 'Ready', 'bannerKeyboard.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `kb_layout`
--

CREATE TABLE `kb_layout` (
  `layout_id` int(11) NOT NULL,
  `layout_type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kb_layout`
--

INSERT INTO `kb_layout` (`layout_id`, `layout_type`) VALUES
(2, 'Full Keyboard'),
(3, '75%');

-- --------------------------------------------------------

--
-- Table structure for table `kb_products`
--

CREATE TABLE `kb_products` (
  `prod_id` int(11) NOT NULL,
  `prod_img` text NOT NULL,
  `prod_name` text NOT NULL,
  `prod_desc` text NOT NULL,
  `prod_price` int(11) NOT NULL,
  `prod_qty` text NOT NULL,
  `kb_brand` text NOT NULL,
  `kb_layout` text NOT NULL,
  `kb_switch` tinyint(1) NOT NULL,
  `kb_cat` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kb_switches`
--

CREATE TABLE `kb_switches` (
  `switch_id` int(11) NOT NULL,
  `switch_type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kb_switches`
--

INSERT INTO `kb_switches` (`switch_id`, `switch_type`) VALUES
(2, 'Linear'),
(3, 'Tatctile');

-- --------------------------------------------------------

--
-- Table structure for table `new_table_name`
--

CREATE TABLE `new_table_name` (
  `prod_id` int(11) NOT NULL,
  `prod_img` text NOT NULL,
  `title` text NOT NULL,
  `prod_cat` text NOT NULL,
  `prod_brand` text NOT NULL,
  `kb_layout` text NOT NULL,
  `kb_switch` text NOT NULL,
  `prod_price` text NOT NULL,
  `prod_qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `u_id` int(11) NOT NULL,
  `u_name` text NOT NULL,
  `u_email` text NOT NULL,
  `u_pass` text NOT NULL,
  `u_num` text NOT NULL,
  `u_address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `kb_brand`
--
ALTER TABLE `kb_brand`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `kb_categories`
--
ALTER TABLE `kb_categories`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `kb_layout`
--
ALTER TABLE `kb_layout`
  ADD PRIMARY KEY (`layout_id`);

--
-- Indexes for table `kb_products`
--
ALTER TABLE `kb_products`
  ADD PRIMARY KEY (`prod_id`);

--
-- Indexes for table `kb_switches`
--
ALTER TABLE `kb_switches`
  ADD PRIMARY KEY (`switch_id`);

--
-- Indexes for table `new_table_name`
--
ALTER TABLE `new_table_name`
  ADD PRIMARY KEY (`prod_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`u_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kb_brand`
--
ALTER TABLE `kb_brand`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `kb_categories`
--
ALTER TABLE `kb_categories`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `kb_layout`
--
ALTER TABLE `kb_layout`
  MODIFY `layout_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `kb_products`
--
ALTER TABLE `kb_products`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kb_switches`
--
ALTER TABLE `kb_switches`
  MODIFY `switch_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `new_table_name`
--
ALTER TABLE `new_table_name`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

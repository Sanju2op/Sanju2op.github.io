-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2023 at 01:40 PM
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

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_pass`) VALUES
(1, 'admin', 'admin'),
(2, 'sanjay', '1234');

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
(1, 'FILCO', 'sales@filco.com'),
(2, 'Multix', 'sales@multix.com'),
(3, 'AEON Gaming', 'sales@ag.com'),
(4, 'AEBoards', 'sales@aeboards.com'),
(5, 'Akko', 'sales@akko.com');

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
(1, 'DIY Keyboard Kits', 'cat_diy_kb.jpg'),
(2, 'Keyboards', 'outofbox_kb.jpg'),
(3, 'Keycaps', 'keycaps_kb.jpg'),
(4, 'Switches', 'kb_switches.jpg');

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
(1, 'Full Size'),
(2, 'TKL'),
(3, '75%'),
(4, 'Compact'),
(5, 'Barebones'),
(6, 'Switch Only');

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

--
-- Dumping data for table `kb_products`
--

INSERT INTO `kb_products` (`prod_id`, `prod_img`, `prod_name`, `prod_desc`, `prod_price`, `prod_qty`, `kb_brand`, `kb_layout`, `kb_switch`, `kb_cat`) VALUES
(1, 'fullSizeKB.jpg', 'Akko 3098S World Tour London', 'Comes with RGB Backlit and Akko CS switches, the keyboard is ideal for gaming and office, with instant actuation.', 9499, '18', '5', '1', 1, '2'),
(2, 'TKLkb.jpg', 'Multix TKL (Summer) [New Batch]', 'A brand new TKL-sized keyboard! This is an accessible yet customizable TKL sized keyboard!', 8299, '9', '2', '2', 2, '2'),
(3, '75perKb.jpg', 'AEON Gaming Striker Stack Gasket Mount 75% Keyboard', 'If you often use a laptop for work and gaming, the AG (AEON GAMING) STRIKER is perfect for you, it has a layout similar to laptop keyboard, which allows you to quickly get started without getting used to the keyboard.', 6499, '11', '3', '3', 3, '2'),
(4, 'CompactKb.jpg', 'Filco Majestouch Minila-R Convertible (Matte Black)', 'The Minila-R comes with a layout than can be adjusted to different presets with the DIP switches at the back of the keyboard. Mac layouts are fully supported on this keyboard with the designated switch to adjust Mac configuration.', 13999, '16', '1', '4', 5, '2'),
(5, 'BarebonerKb.jpg', 'Multix TKL Barebones', 'A brand new TKL-sized keyboard! This is an accessible yet customizable TKL sized keyboard!', 4999, '3', '2', '5', 4, '2'),
(6, 'akko_kbKits.jpg', 'Akko ACR TOP 75 Acrylic (White)', 'Note: This keyboard comes completely un-assembled. Akko 5-pin Hotswap Socket; Backlit RGB (Acrylic version only – backlit was removed on aluminum version to optimize sound profile).', 12499, '2', '5', '3', 4, '1'),
(7, 'akko006_kbKits.jpg', 'Akko MOD 006', 'MOD006 has the same specification as MOD007v2 but the knob has been replaced by a screw-in customizable badge. The character “寅” on the default badge means the Year of Tiger.', 15899, '5', '5', '3', 4, '1'),
(8, 'akko_kbCaps1.jpg', 'Akko ASA Shine-Through Keycap Set (Black)', 'The keycap set is compatible with major layouts including 60%, 64-key, 65%, 75%, TKL, 1800 compact, 96% and full-size keyboard.', 2999, '9', '5', '1', 4, '3'),
(9, 'pom茶-1.jpg', 'Akko POM Brown Switch (Pack of 45)', 'Akko’s full POM switches;  Comparing to Lavender Purple, POM Brown is slightly heavier and has a medium point of tactile feedback;  With the 18mm extension spring, the POM materials will make the switches more smooth and cream, providing unique typing experiences.', 1699, '49', '5', '6', 2, '4');

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
(1, 'Linear'),
(2, 'Tactile'),
(3, 'Clicky'),
(4, 'Switch Parts'),
(5, 'Low Profile'),
(6, 'Silent Switches');

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
-- Dumping data for table `users`
--

INSERT INTO `users` (`u_id`, `u_name`, `u_email`, `u_pass`, `u_num`, `u_address`) VALUES
(1, 'Sanjay', 'sanjaylagariya@gmail.com', '1234', '9998603922', 'Duwada, Ta. Gandevi, Dist. Navsari, Gujarat');

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
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kb_brand`
--
ALTER TABLE `kb_brand`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `kb_categories`
--
ALTER TABLE `kb_categories`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `kb_layout`
--
ALTER TABLE `kb_layout`
  MODIFY `layout_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `kb_products`
--
ALTER TABLE `kb_products`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `kb_switches`
--
ALTER TABLE `kb_switches`
  MODIFY `switch_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `new_table_name`
--
ALTER TABLE `new_table_name`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

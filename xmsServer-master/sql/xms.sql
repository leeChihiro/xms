/*
 Navicat Premium Data Transfer

 Source Server         : 赵睿项目
 Source Server Type    : MariaDB
 Source Server Version : 100316
 Source Host           : localhost:3306
 Source Schema         : xms

 Target Server Type    : MariaDB
 Target Server Version : 100316
 File Encoding         : 65001

 Date: 06/08/2019 13:41:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info`  (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `upwd` char(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES (1, '1111', '96e79218965eb72c92a549dd5a330112', '1@1.1');

SET FOREIGN_KEY_CHECKS = 1;

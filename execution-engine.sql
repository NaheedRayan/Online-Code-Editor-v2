-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2022 at 07:10 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `execution-engine`
--

-- --------------------------------------------------------

--
-- Table structure for table `file_data`
--

CREATE TABLE `file_data` (
  `file_id` int(11) NOT NULL,
  `file_name` varchar(256) NOT NULL,
  `file_data` text NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `file_data`
--

INSERT INTO `file_data` (`file_id`, `file_name`, `file_data`, `date`, `id`) VALUES
(13, 'hello', '{\"src\":\"// Your First C++ Program\\r\\n\\r\\n#include <iostream>\\r\\n\\r\\nint main() {\\r\\n    std::cout << \\\"Hello World!\\\";\\r\\n    return 0;\\r\\n}\\r\\n\",\"stdin\":\"\",\"lang\":\"c\",\"timeout\":\"5\"}', '2022-05-08', 8),
(14, 'quotient reminder', '{\"src\":\"#include <iostream>\\r\\nusing namespace std;\\r\\n\\r\\nint main()\\r\\n{    \\r\\n    int divisor, dividend, quotient, remainder;\\r\\n\\r\\n    cout << \\\"Enter dividend: \\\";\\r\\n    cin >> dividend;\\r\\n\\r\\n    cout << \\\"Enter divisor: \\\";\\r\\n    cin >> divisor;\\r\\n\\r\\n    quotient = dividend / divisor;\\r\\n    remainder = dividend % divisor;\\r\\n\\r\\n    cout << \\\"Quotient = \\\" << quotient << endl;\\r\\n    cout << \\\"Remainder = \\\" << remainder;\\r\\n\\r\\n    return 0;\\r\\n}\",\"stdin\":\"\",\"lang\":\"c\",\"timeout\":\"5\"}', '2022-05-08', 8),
(15, 'sawp', '{\"src\":\"#include <iostream>\\r\\nusing namespace std;\\r\\n\\r\\nint main()\\r\\n{\\r\\n    int a = 5, b = 10, temp;\\r\\n\\r\\n    cout << \\\"Before swapping.\\\" << endl;\\r\\n    cout << \\\"a = \\\" << a << \\\", b = \\\" << b << endl;\\r\\n\\r\\n    temp = a;\\r\\n    a = b;\\r\\n    b = temp;\\r\\n\\r\\n    cout << \\\"\\\\nAfter swapping.\\\" << endl;\\r\\n    cout << \\\"a = \\\" << a << \\\", b = \\\" << b << endl;\\r\\n\\r\\n    return 0;\\r\\n}\",\"stdin\":\"\",\"lang\":\"c\",\"timeout\":\"5\"}', '2022-05-08', 9),
(16, 'prime number Between Two Intervals', '{\"src\":\"#include <iostream>\\r\\nusing namespace std;\\r\\n\\r\\nint check_prime(int);\\r\\n\\r\\nint main() {\\r\\n\\r\\n  int n1, n2;\\r\\n  bool flag;\\r\\n\\r\\n  cout << \\\"Enter two positive integers: \\\";\\r\\n  cin >> n1 >> n2;\\r\\n\\r\\n  // swapping n1 and n2 if n1 is greater than n2\\r\\n  if (n1 > n2) {\\r\\n    n2 = n1 + n2;\\r\\n    n1 = n2 - n1;\\r\\n    n2 = n2 - n1;\\r\\n  }\\r\\n\\r\\n  cout << \\\"Prime numbers between \\\" << n1 << \\\" and \\\" << n2 << \\\" are:\\\\n\\\";\\r\\n\\r\\n  for(int i = n1+1; i < n2; ++i) {\\r\\n    // if i is a prime number, flag will be equal to 1\\r\\n    flag = check_prime(i);\\r\\n\\r\\n    if(flag)\\r\\n      cout << i << \\\", \\\";\\r\\n  }\\r\\n\\r\\n  return 0;\\r\\n}\\r\\n\\r\\n// user-defined function to check prime number\\r\\nint check_prime(int n) {\\r\\n  bool is_prime = true;\\r\\n\\r\\n  // 0 and 1 are not prime numbers\\r\\n  if (n == 0 || n == 1) {\\r\\n    is_prime = false;\\r\\n  }\\r\\n  \\r\\n  for(int j = 2; j <= n/2; ++j) {\\r\\n    if (n%j == 0) {\\r\\n      is_prime = false;\\r\\n      break;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  return is_prime;\\r\\n}\",\"stdin\":\"\",\"lang\":\"c\",\"timeout\":\"5\"}', '2022-05-08', 9),
(17, 'Program to Add Two Integers', '{\"src\":\"class Main {\\r\\n\\r\\n  public static void main(String[] args) {\\r\\n    \\r\\n    System.out.println(\\\"Enter two numbers\\\");\\r\\n    int first = 10;\\r\\n    int second = 20;\\r\\n    \\r\\n    System.out.println(first + \\\" \\\" + second);\\r\\n\\r\\n    // add two numbers\\r\\n    int sum = first + second;\\r\\n    System.out.println(\\\"The sum is: \\\" + sum);\\r\\n  }\\r\\n}\",\"stdin\":\"\",\"lang\":\"c\",\"timeout\":\"5\"}', '2022-05-08', 9),
(18, 'Python Program to Find the Square Root', '{\"src\":\"# Python Program to calculate the square root\\r\\n\\r\\n# Note: change this value for a different result\\r\\nnum = 8 \\r\\n\\r\\n# To take the input from the user\\r\\n#num = float(input(\'Enter a number: \'))\\r\\n\\r\\nnum_sqrt = num ** 0.5\\r\\nprint(\'The square root of %0.3f is %0.3f\'%(num ,num_sqrt))\\r\\n\",\"stdin\":\"\",\"lang\":\"c\",\"timeout\":\"5\"}', '2022-05-08', 9),
(19, 'Solve Quadratic Equation', '{\"src\":\"# Solve the quadratic equation ax**2 + bx + c = 0\\r\\n\\r\\n# import complex math module\\r\\nimport cmath\\r\\n\\r\\na = 1\\r\\nb = 5\\r\\nc = 6\\r\\n\\r\\n# calculate the discriminant\\r\\nd = (b**2) - (4*a*c)\\r\\n\\r\\n# find two solutions\\r\\nsol1 = (-b-cmath.sqrt(d))/(2*a)\\r\\nsol2 = (-b+cmath.sqrt(d))/(2*a)\\r\\n\\r\\nprint(\'The solution are {0} and {1}\'.format(sol1,sol2))\\r\\n\",\"stdin\":\"\",\"lang\":\"c\",\"timeout\":\"5\"}', '2022-05-08', 9),
(20, 'Check Whether a Number is Even or Odd', '{\"src\":\"import java.util.Scanner;\\r\\n\\r\\npublic class EvenOdd {\\r\\n\\r\\n    public static void main(String[] args) {\\r\\n\\r\\n        Scanner reader = new Scanner(System.in);\\r\\n\\r\\n        System.out.print(\\\"Enter a number: \\\");\\r\\n        int num = reader.nextInt();\\r\\n\\r\\n        if(num % 2 == 0)\\r\\n            System.out.println(num + \\\" is even\\\");\\r\\n        else\\r\\n            System.out.println(num + \\\" is odd\\\");\\r\\n    }\\r\\n}\",\"stdin\":\"\",\"lang\":\"c\",\"timeout\":\"5\"}', '2022-05-08', 8),
(21, 'Compute Quotient and Remainder', '{\"src\":\"public class QuotientRemainder {\\r\\n\\r\\n  public static void main(String[] args) {\\r\\n\\r\\n    int dividend = 25, divisor = 4;\\r\\n\\r\\n    int quotient = dividend / divisor;\\r\\n    int remainder = dividend % divisor;\\r\\n\\r\\n    System.out.println(\\\"Quotient = \\\" + quotient);\\r\\n    System.out.println(\\\"Remainder = \\\" + remainder);\\r\\n  }\\r\\n}\",\"stdin\":\"\",\"lang\":\"c\",\"timeout\":\"5\"}', '2022-05-08', 8);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(200) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `first_name`, `last_name`, `email`, `password`, `address`, `city`, `zip`, `phone`) VALUES
(8, 'abir', 'abir', 'khan', 'abir@gmail.com', '123456', 'dhaka', 'dhaka', '1216', '017255555312'),
(9, 'naheed', '', '', 'naheed@gmail.com', '123456', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `file_data`
--
ALTER TABLE `file_data`
  ADD PRIMARY KEY (`file_id`),
  ADD KEY `File_key` (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `file_data`
--
ALTER TABLE `file_data`
  MODIFY `file_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `file_data`
--
ALTER TABLE `file_data`
  ADD CONSTRAINT `File_key` FOREIGN KEY (`id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

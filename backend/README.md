# Goto start.spring.io
Project: maven
language: java
springboot: 4.0
Project metadata-
Group: com.sight
Artifacts: ecommerce
Description: ecommerce-website
Dependency: Spring Web,Spring Data JPA, PostgresSQL Driver, Spring Boot DevTools
-- Generate Project

# Setup application properties
- change endpoint and password (based on aws postgress DB details)
- Goto EcommerceApplication.java and run the current file. (You should see tomcat on port 8080)

+++++++++++++++++++++++

# Create new package for models and create category class
-- add variables
-- add validation dependency in pom.xml
-- add constructor
-- add getters and setter

# create new package repository and CategoryRepository class
# create new package service and CategoryService class
# create new package controller and CategoryController class

- test through postman

# Docker command to build image
docker run -p 8080:8080 \
  -e AWS_ACCESS_KEY_ID="xxxxx" \
  -e AWS_SECRET_ACCESS_KEY="xxxxxx" \
  -e AWS_REGION="us-east-1" \
  ecommerce-prod:latest




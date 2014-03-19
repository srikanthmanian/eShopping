
package com.eshopping.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  eshopping.User
 *  03/19/2014 11:17:59
 * 
 */
public class User {

    private Integer id;
    private Integer phone;
    private String street;
    private String state;
    private String productBought;
    private String password;
    private String city;
    private String country;
    private String houseNo;
    private String landmark;
    private String pin;
    private String email;
    private String name;
    private Set<com.eshopping.data.Itemorder> itemorders = new HashSet<com.eshopping.data.Itemorder>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getProductBought() {
        return productBought;
    }

    public void setProductBought(String productBought) {
        this.productBought = productBought;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getHouseNo() {
        return houseNo;
    }

    public void setHouseNo(String houseNo) {
        this.houseNo = houseNo;
    }

    public String getLandmark() {
        return landmark;
    }

    public void setLandmark(String landmark) {
        this.landmark = landmark;
    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<com.eshopping.data.Itemorder> getItemorders() {
        return itemorders;
    }

    public void setItemorders(Set<com.eshopping.data.Itemorder> itemorders) {
        this.itemorders = itemorders;
    }

}


package com.eshopping.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  eshopping.User
 *  03/20/2014 19:14:32
 * 
 */
public class User {

    private Integer id;
    private String landmark;
    private Integer phone;
    private String email;
    private String pin;
    private String name;
    private String street;
    private String password;
    private String productBought;
    private String city;
    private String country;
    private Set<com.eshopping.data.Itemorder> itemorders = new HashSet<com.eshopping.data.Itemorder>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLandmark() {
        return landmark;
    }

    public void setLandmark(String landmark) {
        this.landmark = landmark;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getProductBought() {
        return productBought;
    }

    public void setProductBought(String productBought) {
        this.productBought = productBought;
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

    public Set<com.eshopping.data.Itemorder> getItemorders() {
        return itemorders;
    }

    public void setItemorders(Set<com.eshopping.data.Itemorder> itemorders) {
        this.itemorders = itemorders;
    }

}

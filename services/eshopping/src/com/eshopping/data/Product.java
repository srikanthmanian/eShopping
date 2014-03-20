
package com.eshopping.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  eshopping.Product
 *  03/20/2014 19:14:32
 * 
 */
public class Product {

    private Integer id;
    private String imgUrl;
    private String category;
    private Double price;
    private String description;
    private String name;
    private Boolean availability;
    private Set<com.eshopping.data.Itemorder> itemorders = new HashSet<com.eshopping.data.Itemorder>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getAvailability() {
        return availability;
    }

    public void setAvailability(Boolean availability) {
        this.availability = availability;
    }

    public Set<com.eshopping.data.Itemorder> getItemorders() {
        return itemorders;
    }

    public void setItemorders(Set<com.eshopping.data.Itemorder> itemorders) {
        this.itemorders = itemorders;
    }

}

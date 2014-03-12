
package com.eshopping.data;



/**
 *  eshopping.Itemorder
 *  03/12/2014 20:26:17
 * 
 */
public class Itemorder {

    private Integer id;
    private Product product;
    private String status;
    private User user;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}

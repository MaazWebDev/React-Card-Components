function SingleProductDetail() {
    const productDetails = JSON.parse(localStorage.getItem("productDetails"));
    console.log(productDetails);
    
    return <div>SingleProductDetail</div>;
  }
  
  export default SingleProductDetail;
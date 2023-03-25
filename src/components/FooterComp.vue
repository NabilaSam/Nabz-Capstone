<template >
    <div class="footer">
        <MDBFooter :text="['center', 'lg-start', 'muted']">
        <!-- Section: Social media -->
        <section class="
            d-flex
            justify-content-center justify-content-lg-between
            p-4
            border-bottom
          ">
          <!-- Left -->
          <!-- Right -->
          <div>
            <a href="" class="me-4 text-reset">
              <MDBIcon iconStyle="fab" icon="facebook-f"></MDBIcon>
            </a>
            <a href="" class="me-4 text-reset">
              <MDBIcon iconStyle="fab" icon="twitter"></MDBIcon>
            </a>
            <a href="" class="me-4 text-reset">
              <MDBIcon iconStyle="fab" icon="google"></MDBIcon>
            </a>
            <a href="" class="me-4 text-reset">
              <MDBIcon iconStyle="fab" icon="instagram"></MDBIcon>
            </a>
            <a href="" class="me-4 text-reset">
              <MDBIcon iconStyle="fab" icon="linkedin"></MDBIcon>
            </a>
            <a href="" class="me-4 text-reset">
              <MDBIcon iconStyle="fab" icon="github"></MDBIcon>
            </a>
          </div>
          <!-- Right -->
        </section>
        <!-- Section: Social media -->
        <!-- Section: Links  -->
        <section class="">
          <MDBContainer class="text-center text-md-start mt-5">
            <!-- Grid row -->
            <MDBRow class="mt-3">
              <!-- Grid column -->
              <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
                <!-- Content -->
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Nintai no ie
                </h6>
                <p>
                    Japanese term which means “Home Of Patience”.
    
    The inspiration for this name is derived from the art of growing bonsai, which is a method that requires lots of patience and precision. My name is Nabila Samsodien and I’ve  I have almost 7 years of experience with growing and caring for bonsais.
    
    There are certain bonsais that are really hard to find such as an Inoki that is older than 40 years.
    
                </p>
              </MDBCol>
              <!-- Grid column -->
              <!-- Grid column -->
              <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
                <!-- Links -->
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                
                <p>
                  <i class="fas fa-home me-3"></i> Imam Haron Road, Claremont, 7780
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  : nabzluciano@gmail.com
                </p>
                <p>
                  <MDBIcon/> <i class="fa fa-phone fa-0.5x"> </i> +27 12 345 6789
                </p>
              </MDBCol>
              <!-- Grid column -->
            </MDBRow>
            <!-- Grid row -->
          </MDBContainer>
        </section>
        <!-- Section: Links  -->
        <!-- Copyright -->
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
          © 2023 Copyright:
          <p class="text-reset fw-bold">Nabila Samsodien</p>
        </div>
        <!-- Copyright -->
      </MDBFooter>

    </div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
    .footer{
    background-color: rgb(0, 0, 0);
    color: aliceblue;
    padding-left: 150px;
    padding-right: 150px;
    justify-content: center;
    display: flex;
    align-items: center;
    }

   
@media screen and (max-width: 1200px) 
{
.footer { 
  padding-left: 5px !important;
  padding-right: 5px !important;
    justify-content: center;
    display: flex;
} 
 
}

   
</style>
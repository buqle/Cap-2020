<template>
    <div>
        <div class="footer"  v-if="$route.path!='/about'">
            <div w1200  c-fff>
                <div class="footer-top">
                    <img src="../assets/bottom.png" width="140" height="30">
                </div>
                <p flex>Contact us: ACQUACAP</p>
                <pre><b>Risk Warning:</b>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. Leveraged products may not be suitable for everyone. You should consider whether you understand how the products work, and whether you can afford to take the high risk of losing your capital.</pre>
                <div style="height: 20px;"></div>
                <pre><b>Restricted Regions:</b>ACQUACAP does not provide services for the residents of certain countries, such as the United States of America and the Islamic Republic of Iran. </pre>
            </div>
        </div>

        <div v-else  class="footer-new">
            <dl flex w1200 align-center>
                <dt flex align-center>
                    © 2020 ACQUACAP
                </dt>
               <!-- <dd>
                    <span>Contact</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                    <span>Legal Notice</span>
                </dd>-->
            </dl>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Bottom"
    }
</script>

<style scoped>
.footer-new{font-size: 24px;background: #fff;padding: 40px 0 50px 0;font-weight: 500;color: #383838;}

    .footer-new dd span{padding-right: 34px;}
</style>

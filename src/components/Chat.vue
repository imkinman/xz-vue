<template>
    <div class="right_col" role="main">
        <!-- top tiles -->
        <div class="row tile_count">
            <div class="col-sm-4 col-xs-6 tile_stats_count">
                <span class="count_top"><i class="fa fa-laptop"></i> 上架商品总数</span>
                <div class="count">24,380</div>
                <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>128% </i> 较上月</span>
            </div>
            <div class="col-sm-4 col-xs-6 tile_stats_count">
                <span class="count_top"><i class="fa fa-user"></i> 注册用户总数</span>
                <div class="count green">1,965</div>
                <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>50% </i> 较上周</span>
            </div>
            <div class="col-sm-4 col-xs-6 tile_stats_count">
                <span class="count_top"><i class="fa fa-shopping-cart"></i> 已完成订单总数</span>
                <div class="count red">391</div>
                <span class="count_bottom"><i class="red"><i class="fa fa-sort-desc"></i>15% </i> 较上周</span>
            </div>
            <div class="col-sm-4 col-xs-6 tile_stats_count">
                <span class="count_top"><i class="fa fa-pagelines"></i> 当日PC端PV量</span>
                <div class="count red">14,281</div>
                <span class="count_bottom"><i class="red"><i class="fa fa-sort-desc"></i>12% </i> 较昨日</span>
            </div>
            <div class="col-sm-4 col-xs-6 tile_stats_count">
                <span class="count_top"><i class="fa fa-mobile"></i> 移动端PV量</span>
                <div class="count green">29,315</div>
                <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>34% </i> 较昨日</span>
            </div>
            <div class="col-sm-4 col-xs-6 tile_stats_count">
                <span class="count_top"><i class="fa fa-apple"></i> App总下载量</span>
                <div class="count green">7,422</div>
                <span class="count_bottom"><i class="green"><i class="fa fa-sort-asc"></i>18% </i> 较上周</span>
            </div>
        </div>
        <!-- /top tiles -->
        <br>
        <div class="row">
            <div class="col-xs-12">
                <div class="dashboard_graph">
                <div class="row">
                    <div class="col-xs-12 x_title">
                    <h3>实时访问量监控
                        <small>x100</small>
                    </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                    <div id="placeholder" class="demo-placeholder"></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                data:[],
                totalPoints:300,
                updateInterval:30,
                plot:null
            }
        },
        methods:{
            getRandomData() {
                if (this.data.length > 0)
                    this.data = this.data.slice(1);
                while (this.data.length < this.totalPoints) {
                    var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50,
                        y = prev + Math.random() * 10 - 5;
                    if (y < 0) {
                        y = 0;
                    } else if (y > 100) {
                        y = 100;
                    }
                    this.data.push(y);
                }
                var res = [];
                for (var i = 0; i < this.data.length; ++i) {
                    res.push([i, this.data[i]])
                }
                return res;
            },
            update() {
                this.plot.setData([this.getRandomData()]);
                this.plot.draw();
                setTimeout(this.update, this.updateInterval);
            }
        },
        mounted(){
            $("#updateInterval").val(this.updateInterval).change(e=>{
                var v = $(e.target).val();
                if (v && !isNaN(+v)) {
                    this.updateInterval = +v;
                    if (this.updateInterval < 1) {
                        this.updateInterval = 1;
                    } else if (this.updateInterval > 2000) {
                        this.updateInterval = 2000;
                    }
                    $(e.target).val("" + this.updateInterval);
                }
            });
            this.plot = $.plot("#placeholder", [this.getRandomData()], {
                series: {
                    shadowSize: 0
                },
                yaxis: {
                    min: 0,
                    max: 100
                },
                xaxis: {
                    show: false
                }
            });
            this.update();
        }
    }
</script>
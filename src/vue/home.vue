<template>
    <ion-view class="wantOffer">
        <ion-content>
            <div class="worker_topTitle">
                招工
            </div>
            <div class="worker_banner">
                <img src="./../images/tempSrc/01e439571c20646ac72538120b45fd.png" class="arrow_index">
            </div>
            <div class="regionSelect">
                <div class="half leftBorder">
                    重庆<i></i>
                    <select>
                        <option value="北京">北京</option>
                        <option value="上海">上海</option>
                    </select>
                </div>
                <div class="half">
                    江北区<i></i>
                </div>
            </div>
            <div class="worker_list">
                <h3>
                    求职信息
                </h3>
                <ul>
                    <li ng-repeat = "item in data.pList">
                        <img src="./../images/tempSrc/temp_pro.png" >
                        <div class="info">
                            <p class="name">
                                <!-- 东方不败 -->
                                <!-- {{item.projectName}} -->
                            </p>
                            <p class="workeType">
                                <!-- {{item.workerTypeName}} -->
                            </p>
                            <p class="evaluation">
                                综合评价：<i>4.9</i>
                            </p>
                        </div>
                        <button ng-click="inviteSomebody(item.id)">
                            邀请
                        </button>
                    </li>

                </ul>
            </div>

            <div class="publishProBut" ng-click="toPublishPro()">
                <button>
                    我要发布
                </button>
            </div>
        </ion-content>
    </ion-view>

</template>
<script>
// js
</script>
<style lang="scss">
.wantOffer {
    background: #fdfeff;
    .worker_banner {
        img {
            width: 100%;
        }
    }
    .regionSelect {
        font-size: 0px;
        background: #fdfeff;
        border-bottom: 2px solid #f1f1f1;
        .leftBorder {
            &:after {
                content: '';
                width: 2px;
                height: 34px;
                background: #f1f1f1;
                position: absolute;
                right: 0px;
                top: 15px;
            }
        }
        .half {
            display: inline-block;
            height: 54px;
            line-height: 54px;
            font-size: 15px;
            text-align: center;
            ;
            color: #444443;
            width: 50%;
            position: relative;
            i {
                display: inline-block;
                height: 15px;
                width: 15px;
                background-image: url(./../images/wantOffer/down_arrow.png);
                background-size: 12px;
                background-repeat: no-repeat;
                position: relative;
                top: 6px;
                left: 3px;
            }
            select {
                display: inline-block;
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0%;
                top: 0%;
                opacity: 0;
                // margin-left: -50%;
                // margin-top: -50%;
            }
        }
    }
    .worker_list {
        // padding-bottom: 50px;
        h3 {
            background: #f9f9f9;
            height: 30px;
            line-height: 30px;
            font-size: 15px;
            text-align: center;
            color: #6c6c6c;
        }
        ul {
            background: #fdfeff;
            li {
                padding: 13px 0px;
                padding-left: 40px;
                padding-left: 1.066rem;
                border-bottom: 1px solid #f3f3f3;
                position: relative;
                img {
                    width: 55px;
                    height: 55px;
                    border-radius: 100px;
                    display: inline-block;
                }
                .info {
                    display: inline-block;
                    margin-left: 20px;
                    p {
                        color: #8d8d8d;
                        font-size: 13px;
                    }
                    .name {
                        color: #171717;
                        font-size: 15px;
                        padding-bottom: 5px;
                    }
                    .workeType {
                        padding-bottom: 10px;
                    }
                    .evaluation {
                        i {
                            color: #f1c805;
                        }
                    }
                }
                button {
                    width: 65px;
                    width: 1.73rem;
                    color: #171717;
                    background: #fad318;
                    position: absolute;
                    right: 43px;
                    right: 1.146rem;
                    height: 27px;
                    line-height: 27px;
                    font-size: 13px;
                    border-radius: 20px;
                    border: none;
                    top: 50%;
                    margin-top: -17px;
                }
            }
        }
    }
    .publishProBut {
        margin-bottom: 50px;
        height: 80px;
        text-align: center;
        padding-top: 15px;
        button {
            width: 150px;
            font-size: 15px;
            display: inline-block;
            color: #171717;
            background: #fad318;
            height: 35px;
            line-height: 35px;
            border: none;
            border-radius: 19px;
        }
    }
}
</style>

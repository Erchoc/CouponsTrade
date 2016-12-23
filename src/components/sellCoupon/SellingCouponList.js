/**
 * Author：pengfei
 * Create Date：2016/12/13
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 发售中的商品列表
 */
import React from 'react'
import {List, ListHeader} from 'react-onsenui'
import CouponInfo from './CouponInfo'

const SellingCouponList = ({data, onClickPushPage})=> {

    const renderRow = (row)=> {
        return (
            <CouponInfo key={row.couponName} {...row} onClick={onClickPushPage}/>
        )
    };

    return (
        <List dataSource={data}
              modifier=" limit"
              renderHeader={() =><ons-list modifier="noborder">
                  <ons-list-item>
                      <ons-row>
                          <ons-col>
                              全部分类<ons-icon icon="ion-arrow-down-b"></ons-icon>
                          </ons-col>
                          <ons-col>
                              全城<ons-icon icon="ion-arrow-down-b"></ons-icon>
                          </ons-col>
                          <ons-col>
                              智能排序<ons-icon icon="ion-arrow-down-b"></ons-icon>
                          </ons-col>
                      </ons-row>
                  </ons-list-item>
              </ons-list>
              }
              renderRow={renderRow}
        />
    )
};

SellingCouponList.propTypes = {
    data: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            couponName: React.PropTypes.string.isRequired,
            sellingPrice: React.PropTypes.number.isRequired,
            description: React.PropTypes.string.isRequired
        })).isRequired,
    onClickPushPage: React.PropTypes.func.isRequired
};

export default SellingCouponList


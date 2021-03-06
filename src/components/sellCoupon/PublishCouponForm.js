/**
 * Author：pengfei
 * Create Date：2016/12/8
 * Modified By：pengfei
 * Why & What is modified  <修改原因描述>
 * 发布商品组建
 */
import React from 'react'
import {reduxForm} from 'redux-form'
import CouponFields from  './CouponFields'

const PublishCouponForm = (props)=> {
    const {handleSubmit, onSubmit, invalid, submitting} = props
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section>
                <CouponFields disable={invalid || submitting}
                              buttonName="确认发布" onSubmit={props.submit}
                              couponTypeName="请选择"
                />
            </section>
        </form>
    )
}

PublishCouponForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
}

const validate = (value) => {
    const errors = {};
    if (!value.couponName) {
        errors.couponName = 'Required'
    }
    if (!value.couponCode) {
        errors.couponCode = 'Required'
    }
    if (!value.originalPrice) {
        errors.originalPrice = 'Required'
    }
    if (!value.sellingPrice) {
        errors.sellingPrice = 'Required'
    }
    if (!value.endDate) {
        errors.endDate = 'Required'
    }
    if (!value.describe) {
        errors.describe = 'Required'
    }
    return errors
};

export default reduxForm({
    form: "PublishCouponForm", validate
})(PublishCouponForm)

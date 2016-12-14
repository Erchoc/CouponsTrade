/**
 * Author：Yky
 * Create Date：2016/12/13
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示商品信息的组件
 */
import React, {PropTypes} from 'react'
import {List, ListItem, ListHeader} from 'react-onsenui'

const ItemInfo = ({item, price}) => {
	return (
		<List renderHeader={() => <ListHeader>商品信息</ListHeader>}>
			<ListItem>
				<div className='left'>
					<img src={`http://placekitten.com/g/40/40`} alt="图片" className='list__item__thumbnail'/>
				</div>
				<div className='center'>
					{item}<span>{price + "元"}</span>
				</div>
			</ListItem>
		</List>
	)
};

ItemInfo.propTypes = {
	item: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default ItemInfo
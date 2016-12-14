/**
 * Author：Yky
 * Create Date：2016/12/13
 * Modified By：Yky
 * Why & What is modified  <修改原因描述>
 * 展示买方信息的组件
 */
import React, {PropTypes} from 'react'
import {Icon, Button, List, ListItem, ListHeader} from 'react-onsenui'

const Address = ({name, tel}) => {
	return (
		<List renderHeader={() => <ListHeader>卖家信息</ListHeader>}>
			<ListItem>{name + " " + tel}</ListItem>
		</List>
	)
};

Address.propTypes = {
	name: PropTypes.string.isRequired,
	tel: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
};

export default Address
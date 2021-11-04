import { FC,useState } from 'react';
import _ from 'lodash';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import Modal from 'antd/lib/modal/Modal';
import Wallet from '../../components/userWallet/wallet';

const Topbar: FC = () => {
	const context = useWeb3React<Web3Provider>();
	const { account } = useWeb3React();
	console.log(account, 'account');
	const { active} = context;

    console.log(Web3Provider, 'line 14')
    console.log(account, 'line 15')
    console.log(context, 'line 16')
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div id="topbar">
			{account ? <div id="account">{account}</div> : null}
			<button id="connect-btn" onClick={showModal}>
				{active ? 'Connected' : 'Connect Wallet'}
			</button>
			<Modal
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
                
				<Wallet />
			</Modal>
		</div>
	);
};

export default Topbar;
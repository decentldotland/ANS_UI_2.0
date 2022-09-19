// @flow 
import * as React from 'react';
import { useRecoilState } from 'recoil';
import { isEditorOpen, userInfoState } from '../../atoms';
import Modal from '../portal/modal';
import { Content } from './content';
import { userInfo } from '../../src/types';
type Props = {
    userColor: string;
    wallet: string;
    userInfo: userInfo;
};

export const EditModal = (props: Props) => {
    const [editEnabled, setEditEnabled] = useRecoilState(isEditorOpen);

    const handleClose = React.useCallback(() => setEditEnabled(opened => !opened), [setEditEnabled])

    return (
        <Modal handleClose={handleClose} isOpen={editEnabled}>
            <Content userColor={props.userColor} wallet={props.wallet} handleClose={handleClose} userInfo={props.userInfo} />
        </Modal>
    );
};
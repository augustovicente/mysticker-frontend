import BaseTemplate from 'Components/BaseTemplate';
import { Outlet } from 'react-router-dom';

export const IndexAuth = () => {
    return (
        <BaseTemplate footer={false} >
            <Outlet />
        </BaseTemplate>
    )
}

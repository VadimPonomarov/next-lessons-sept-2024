import React, {FC} from 'react';
import {useFormStatus} from "react-dom";
import {Button, ButtonProps} from "@/components/ui/button.tsx";
import {Spinner} from "@/components/ui/spinner.tsx";

interface IProps extends ButtonProps {
}

const SubmitButton: FC<IProps> = (props) => {
    const status = useFormStatus();
    return (
        <>
            {
                status.pending &&
                <Spinner size={"small"}/> ||
                <Button className={"p-0"} {...props}/>
            }
        </>
    );
};

export default SubmitButton;

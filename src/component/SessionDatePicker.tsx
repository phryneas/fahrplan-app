import React from 'react';
import { Dropdown, Form, Segment } from 'semantic-ui-react';

export interface Props {
    options: string[];
    selectedDate: string;

    onDateSelected: (selectedDate: string) => void;
}

function buildOptions(options: string[]) {
    return options.map(option => ({ text: option, value: option }));
}

const SessionDatePicker: React.FunctionComponent<Props> = props => (
    <Segment>
        <Dropdown
            fluid
            //selection
            options={buildOptions(props.options)}
            value={props.selectedDate}
            onChange={(e, p) => props.onDateSelected(p.value as string)}
        />
    </Segment>
);

export default SessionDatePicker;
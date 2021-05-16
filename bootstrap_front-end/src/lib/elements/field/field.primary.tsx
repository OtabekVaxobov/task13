import styled from 'styled-components';
import React from 'react';

import {TextSecondary} from '../text';
import { spacing } from '../../theme';
import {FieldPrimaryPropsType } from './field.types';

import {text } from '../../common/text'

export function FieldPrimary(props: FieldPrimaryPropsType) {
    const {
        titleTid,
        onChange,
        onBlur,
        value,
        name,
        placeholderTid,
        error,
    } = props;
    return (
        <Container>
            <Title tid={titleTid} />
            <Input
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
                placeholderTid={text(placeholderTid)}
            />
            {error && <ErrorMassage>{error}</ErrorMassage>}
        </Container>
    );
}

const Title = styled(TextSecondary)`
    margin-bottom: ${spacing(1)};`

const Input = styled.input`
    background: #f3f3f3;
    border-radius: 5px;
    padding: 5px 10px;
    `;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ErrorMassage = styled.span`
    color: red;
    front-size: 14px
`;
import styled from 'styled-components';
import { text } from '../../common/text';

import { THEME_SIZE, THEME_COLOR } from '../../theme';
import { TextSecondaryPropsTypes } from './text.types';

export function TextSecondary(props: TextSecondaryPropsTypes) {
    return <Text>{text(props.tid, props.tvalue)}</Text>;
}

const Text = styled.span`
    font-size: ${THEME_SIZE.FONT.SMALL};
    color: ${THEME_COLOR.TEXT_SECONDARY};
`;

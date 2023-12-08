type Paddings = 'small' | 'normal' | 'large' | (string & {});

function getPaddings(padding: Paddings): string {
    if (padding === 'small') return '12px';
    if (padding === 'normal') return '16px';
    if (padding === 'large') return '24px';
    return padding;
}


let padding: Paddings;
padding = 'small'   // 12px;
padding = '8px';    // 8px;

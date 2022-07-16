import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip, TrackLineSettings } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
  render() {
    const { currentColor, id, type, height, width, data, color } = this.props;
    // console.log(currentColor, id, type, height, width, data, color);

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName='x'
        yName='yval'
        type={type}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true
          }
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}

      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export { SparkLine };
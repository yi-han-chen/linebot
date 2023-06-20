export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        // 0.綠色小標
        type: 'text',
        text: '選擇區域剩餘車位',
        weight: 'bold',
        color: '#1DB446',
        size: 'sm'
      },
      {
        // 1.大標
        type: 'text',
        text: '停車場名稱（已改）',
        weight: 'bold',
        size: 'xxl',
        margin: 'md'
      },
      {
        // 2.地址
        type: 'text',
        text: '停車場地址（已改）',
        size: 'xs',
        color: '#aaaaaa',
        wrap: true
      },
      {
        // 3.
        type: 'separator',
        margin: 'xxl'
      },
      {
        // 4.大型車
        type: 'box',
        layout: 'vertical',
        margin: 'xxl',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            margin: 'xxl',
            contents: [
              {
                type: 'text',
                text: '大型車剩餘',
                size: 'sm',
                color: '#555555'
              },
              {
                type: 'text',
                text: '大型車剩餘格數（待改）',
                size: 'sm',
                color: '#111111',
                align: 'end'
              }
            ]
          },
          {
            // 5.一般小型車
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '一般小型車剩餘',
                size: 'sm',
                color: '#555555'
              },
              {
                type: 'text',
                text: '小型車剩餘格數（待改）',
                size: 'sm',
                color: '#111111',
                align: 'end'
              }
            ]
          },
          {
            // 6.殘障小型車
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '殘障者小型車剩餘',
                size: 'sm',
                color: '#555555',
                flex: 0
              },
              {
                type: 'text',
                text: '殘障者小型車剩餘（待改）',
                size: 'sm',
                color: '#111111',
                align: 'end'
              }
            ]
          },
          {
            // 7.婦幼車
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '婦幼小型車剩餘',
                size: 'sm',
                color: '#555555',
                flex: 0
              },
              {
                type: 'text',
                text: '婦幼小型車剩餘（待改）',
                size: 'sm',
                color: '#111111',
                align: 'end'
              }
            ]
          },
          {
            // 8.機車
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'text',
                text: '一般機車剩餘',
                size: 'sm',
                color: '#555555',
                flex: 0
              },
              {
                type: 'text',
                text: '一般機車剩餘（待改）',
                size: 'sm',
                color: '#111111',
                align: 'end'
              }
            ]
          }
        ]
      },
      {
        type: 'box',
        layout: 'horizontal',
        margin: 'md',
        contents: []
      }
    ]
  },
  styles: {
    footer: {
      separator: true
    }
  }
}

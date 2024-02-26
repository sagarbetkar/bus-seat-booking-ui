export default function seatsReducer(data, action) {
  switch (action.type) {
    case 'added': {
      const date = new Date()
      const updatedData = action.formData.map((item) => {
        const itemObj = {
          ...item,
        }
        if (item.isSelected) {
          itemObj.isBooked = true
          itemObj.date = date.toLocaleDateString()
        }
        return itemObj
      })
      const removeUpdatedItems = data.filter(
        (item) => !action.formData.map((d) => d.id).includes(item.id)
      )
      return [...removeUpdatedItems, ...updatedData].sort((a, b) => a.id - b.id)
    }
    case 'changed': {
      return data.map((b) => {
        if (b.id === action.formData[0].id) {
          const date = new Date()
          return {
            ...action.formData[0],
            isBooked: true,
            date: date.toLocaleDateString(),
          }
        } else {
          return b
        }
      })
    }
    case 'deleted':
      return data.map((b) => {
        if (b.id === action.formData.id) {
          return {
            ...action.formData,
            user: {
              firstName: '',
              lastName: '',
              email: '',
            },
            isBooked: false,
            isSelected: false,
            date: null,
          }
        } else {
          return b
        }
      })
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

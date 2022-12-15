
type SettingType = {
    title: string
}

export const Settings = (props: SettingType) => {
  return (
      <div>
          {props.title}
      </div>
  )
}
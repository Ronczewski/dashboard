// import './user.table.css'
export const UserListsOneItem = (props) => {
  const { name, id, lastLogin, mail } = props.user

  return (
    <tr>
      <td>
        {id}
      </td>
      <td>
        {mail}
      </td>
      <td>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </td>
      <td>
        {lastLogin}
      </td>
    </tr>
  )
}

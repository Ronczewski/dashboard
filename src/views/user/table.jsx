import { UserListsOneItem } from "./userListOneItem"

export const Table = (props) => {

  return (
    <table>
      <thead>
        {/* tr czyli jedna linia  */}
        <tr>
          {/* th czyli kolumna   */}
          <th>
            Id:
          </th>
          <th>
            Mail:
          </th>
          <th>
            Name:
          </th>
          <th>
            Last Login date:
          </th>
        </tr>
      </thead>
      <tbody>
        {
          props.list
            .sort((a, b) => a.name > b.name ? 1 : -1)
            .map((ele) => <UserListsOneItem user={ele} key={ele.mail} />)
        }
      </tbody>
    </table>
  )
}

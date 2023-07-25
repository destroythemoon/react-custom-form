import { FormWrapper } from "../FormWrapper";

type AddressData = {
  street: string,
  city: string,
  oblast: string,
  postalCode: string
}

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({ street, city, oblast, postalCode, updateFields }: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={e => updateFields({ street: e.target.value })}
      >
      </input>
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={e => updateFields({ city: e.target.value })}
      >
      </input>
      <label>Oblast</label>
      <input
        required
        type="text"
        value={oblast}
        onChange={e => updateFields({ oblast: e.target.value })}
      >
      </input>
      <label>Postal Code</label>
      <input
        required
        type="text"
        value={postalCode}
        onChange={e => updateFields({ postalCode: e.target.value })}
      >
      </input>
    </FormWrapper>
  )
}
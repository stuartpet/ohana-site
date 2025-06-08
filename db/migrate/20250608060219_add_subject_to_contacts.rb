class AddSubjectToContacts < ActiveRecord::Migration[7.2]
  def change
    add_column :contacts, :subject, :string
  end
end

class AddFullNameColumnToClients < ActiveRecord::Migration[7.0]
  def change
    add_column :clients, :full_name, :string
  end
end

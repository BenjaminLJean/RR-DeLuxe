class Avatar < ApplicationRecord
  belongs_to :user

  validates :name, presence: true, uniqueness: true
  validates :rank, presence: true
  validates :status, presence: true
end

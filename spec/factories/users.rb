FactoryBot.define do
  factory :user do
    nickname                {"abc"}
    email                   {"aaa@gmail.com"}
    password                {"111aaa"}
    password_confirmation   {password}
  end
end

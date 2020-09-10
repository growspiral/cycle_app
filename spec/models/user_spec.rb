require 'rails_helper'

describe User do
  before do
    @user = FactoryBot.build(:user)
  end
  describe 'ユーザー新規登録' do
    context '新規登録が上手くいくとき' do
     it "nicknameとemail,passwordとpasssword_confirmationが存在すれば登録できる" do
      expect(@user).to be_valid
     end

    end

    context '新規登録が上手くいかないとき' do
      it "nicknameが空だと登録できない" do
        @user.nickname = nil
        @user.valid?
        expect(@user.errors.full_messages).to include("Nicknameを入力してください")
      end
      it "emailが空だと登録できない" do
        @user.email = nil
        @user.valid?
        expect(@user.errors.full_messages).to include("Emailを入力してください")
      end
      it "emailが重複していれば登録できない" do
        @user.save
        another_user = FactoryBot.build(:user)
        another_user.email = @user.email
        another_user.valid?
        expect(another_user.errors.full_messages).to include("Emailはすでに存在します")
      end
      it "emailに@が含まれていなければ登録できない" do
        @user.email = "111aaagmail.com"
        @user.valid?
        expect(@user.errors.full_messages).to include("Emailは不正な値です")
      end
      it "passwordが空だと登録できない" do
        @user.password = ""
        @user.valid?
        expect(@user.errors.full_messages).to include("Passwordを入力してください")
      end
      it "passwordとpassword_confirmationが異なれば登録できない" do
        @user.password = "111aaa"
        @user.password_confirmation = "222bbbb"
        @user.valid?
        expect(@user.errors.full_messages).to include("Password confirmationとPasswordの入力が一致しません")
      end
    end
  end

end

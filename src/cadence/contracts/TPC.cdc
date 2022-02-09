import NonFungibleToken from 0xNFTADDRESS

pub contract TPC {
    init() {
      self.totalSupply = 0
    }

    pub var totalSupply: UInt64

    pub resource interface ITPC {
        pub let id: UInt64
    }

    pub resource NFT: ITPC {
        pub let id: UInt64

        init() {
            self.id = TPC.totalSupply
            TPC.totalSupply = TPC.totalSupply + 1
        }
    }

    pub fun createNFT(): @NFT {
        return <- create NFT()
    }

    pub fun createEmptyCollection(): @Collection {
      return <- create Collection()
    }

    pub resource interface CollectionPublic {
        pub fun deposit(token: @NFT)
        pub fun getIDs(): [UInt64]
        pub fun borrowNFT(id: UInt64): &NFT
    }

    pub event Withdraw(id: UInt64, from: Address?)
    pub resource interface Provider {
        // withdraw removes an NFT from the collection and moves it to the caller
        pub fun withdraw(withdrawID: UInt64): @NFT {
            post {
                result.id == withdrawID: "The ID of the withdrawn token must be the same as the requested ID"
            }
        }
    }

    pub event Deposit(id: UInt64, to: Address?)
    pub resource interface Receiver {
        // deposit takes an NFT as an argument and adds it to the Collection
        //
        pub fun deposit(token: @NFT) {

        }
    }
    pub resource Collection: Provider, Receiver, CollectionPublic {

        init() {
          self.ownedNFTs <- {}
        }

        pub fun getIDs(): [UInt64] {
          return self.ownedNFTs.keys
        }

        pub var ownedNFTs: @{UInt64: NFT}

        destroy() {
          destroy self.ownedNFTs
        }

        pub fun withdraw(withdrawID: UInt64): @NFT {
            let token <- self.ownedNFTs.remove(key: withdrawID)
                              ?? panic("This collection doesn't contain NFT with that id")

            return <- token
        }

        pub fun deposit(token: @NFT) {
            self.ownedNFTs[token.id] <-! token
        }

        pub fun borrowNFT(id: UInt64): &NFT {
            return &self.ownedNFTs[id] as &NonFungibleToken.NFT
        }

    }

}
